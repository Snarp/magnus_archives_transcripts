
@in_dir='_raw_posts'
@out_dir='_posts'

def fnames(dirname=@in_dir)
  Dir.glob(File.join(dirname, '*.md')).sort
end

def convert_files(dirname=@in_dir, out_dir: @out_dir)
  @names        = []
  @span_classes = []
  FileUtils.mkdir_p(out_dir)
  Dir.glob(File.join(dirname, '*.md')).sort.each do |fname|
    info = YAML::load(File.read(fname))
    if info['unfinished']
      puts "SKIPPING: #{fname}"
      FileUtils.cp(fname, File.join(out_dir, File.basename(fname)))
      next
    else
      puts "CONVERTING: #{fname}"
      convert_file(fname, File.join(out_dir, File.basename(fname)))
    end
  end
end

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
  span = nil
  name = nil
  dlg_lines = dlg.last.split("\n").map do |line|
    ln=line.strip
    if ln=='' || ln=='------' || ln.start_with?('##### ')
      line
    elsif mtch=rx.match(line)
      name=mtch[1].delete(':').strip
      puts "m=rx.match(line) => #{name} #{line.slice(0, 50)}"
      span=if name.upcase.include?('STATEMENT')
        val=name.downcase.delete("():._").gsub(" ","-").gsub('!','-').strip.gsub('&amp;','and')
        @span_classes.push(val)
        "statement #{val}"
      else
        val=name.split('(').first.strip.gsub(" ","-").gsub('!','-').strip.gsub('&amp;','and').delete('\'"_:.)').downcase
        @span_classes.push(val)
        val
      end
      "<span class=\"#{span}\">#{line}</span>"
    else
      puts "else => #{name} #{line.slice(0, 50)}"
      "<span class=\"#{span}\">#{name}: #{line}</span>"
    end
  end.join("\n")

  @names.concat(names)
  @names.uniq!
  @span_classes.uniq!

  md_txt = "#{yml_lines}\n#{dlg_lines}"
  File.write(out_fname, md_txt)
end