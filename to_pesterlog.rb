
@dirname='_posts'

def fnames(dirname='_posts')
  Dir.glob(File.join(dirname, '*.md')).sort
end

def convert_files(dirname='_posts')
  Dir.glob(File.join(dirname, '*.md')).sort.map do |fname|
    convert_file(fname)
  end
end

@span_classes=[]

def convert_file(fname, out_fname=nil)
  md_txt = File.read(fname)

  out_fname ||= fname.sub('.md', '-EDIT.md')

  names = []

  while m=/\n#### (?<name>[^\n]+)\n\n/.match(md_txt)
    if m[:name].include?('(')
      names.unshift("#{m[:name]}:")
    else
      names.push("#{m[:name]}:")
    end
    md_txt.gsub!(m[0], "\n#{m[:name]}: ")
  end

  names=names.map { |nm| nm.gsub("(","\\(").gsub(")","\\)") }

  rx = /(#{names.join('|')})/

  dlg = md_txt.split("\n---\n")
  raise ArgumentError.new("Parsing error") if dlg.length!=2
  yml_lines = "#{dlg.first}\n---"
  span_classes = []
  span = nil
  name = nil
  dlg_lines = dlg.last.split("\n").map do |line|
    if line.strip==''
      line
    elsif line.strip.start_with?('##### ')
      line
    elsif mtch=rx.match(line)
      name=mtch[1]
      puts "m=rx.match(line) => #{name} #{line.slice(0, 50)}"
      span=if ("ARCHIVIST (STATEMENT)"==name)
        "archivist-statement"
      else
        name.split('(').first.gsub(" ","-").gsub(':','').downcase
      end
      span_classes.push(span)
      "<span class=\"#{span}\">#{line}</span>"
    else
      puts "else => #{name} #{line.slice(0, 50)}"
      "<span class=\"#{span}\">#{name} #{line}</span>"
    end
  end.join("\n")

  md_txt = "#{yml_lines}\n#{dlg_lines}"

  File.write(out_fname, md_txt)
end