---
layout: page_default
---

# SNARP'S TODO

* EPUB ebook:

    - Add specials to end of eBook.

    - Add sources to eBook.

    - Clean up and upload eBook generation script.
  
    - EPUB generator script currently fails to build internal links within transcripts correctly. (Ex: Link to MAG-081 from MAG-195; link to "Volume of a Cone" meme from MAG-140.) Links come out looking like:

        `<a href="{{site.baseurl}}/assets/images/pythagoreumtheorummeme.jpg">Pythagorean theorem, volume of a cone</a>`

        ...as in, with the uninterpreted curly-brace template code in there.

    - Incorporate `epub:type=footnote` and `=noteref` into footnotes? <http://kb.daisy.org/publishing/docs/html/epub-type.html>

* Make next/prev links on News posts smaller (or `yyyy-mm-dd` strings non-breaking) on mobile.

* Page with short explanation of how to submit corrections via Github or email.

    - Then add "Suggest a correction" link at bottom of transcript pages.

* Make trailer/special/incomplete permalinks saner.

* <del>Fix Markdown links on special episodes - currently (2021-03-04) they lead to nonexistent Github URLs like <https://github.com/Snarp/magnus_archives_transcripts/blob/master/_posts/2018-04-19-100.2.md></del>

* <del>Turn top menu "Search" and "Ebook" links into icons on mobile / narrow displays.</del> DONE

* <del>Become official</del> DONE

* <del>Add Dark Mode and localStorage ("cookie") warning for Dark Mode</del> DONE