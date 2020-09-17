---
layout:          post
title:           "MAG000 - ########- - TITLE"
date:            2020-01-01 11:00:00 -0400
categories:      episode
tags:            []
statement_of:    []
recorder:        []
voiced:          []
episode_title:   'TITLE'
episode_number:  '000'
case_number:     '#######-'
statement_date:  
recording_date:  
event_date:      
summary:         ""
content_flags:   []
acast_url:       
formats: 
  PDF: 
  PDF (Large-Print): 
  Google Doc: 
  DOCX: 
official:        
unofficial:      
unofficial_name: 
unfinished:      true
wiki_url:        
---

# SNARP'S MARKDOWN TRANSCRIPT STYLE GUIDE

(If you're looking at this document on Github, please be sure you're viewing it in "Raw" mode.)

If you don't know what Markdown is, you may want to [read about that first](https://www.markdownguide.org/getting-started/). Markdown is basically a very-simple system for formatting text that is both easy to read in plaintext mode and easy to export to other systems. This makes it a good tool for accessibility work, like transcribing audio.

The document below is just an explanation of how I format the audio transcripts I personally make or edit. It's not a set of instructions, and it's not endorsed by any accessibility experts -- it's just an explanation of why I'm doing this stuff. (Also, a note to myself for enforcing consistency.) Please don't be afraid to submit stuff to a project I'm working on because you've got your own style!


------


##### [THIS IS A CAPTION. HAS 5 POUND SIGNS BEFORE IT AND BRACKETS AROUND IT. MOSTLY USED FOR BACKGROUND NOISES, OR SOUNDS CHARACTERS MAKE THAT AREN'T DIALOG AND DON'T COME AS PART OF A LINE OF DIALOG.]

##### [I like to put them in all-caps to make them stand out from the dialog, but it's not necessary, and may harm readability if you're transcribing something with a lot of sound effects.]

##### [SHORT CAPTIONS DON'T NEED PERIODS]

##### [CLICK]

#### CHARACTER NAMES HAVE 4 POUND SIGNS BEFORE THEM

(The pound signs actually translate to "heading levels" in HTML - character names are H4, captions are H5. I'm using them for styling purposes, which is not how they're meant to be used.)

A line of dialog looks like this. Here's another sentence.

And _[laugh]_ _[sigh]_ noises the character makes while speaking have brackets around them, and then underscores around the brackets.

A dialog block can have multiple lines; you don't need ro repeat the character's name every time.

Please note that --

#### OTHER CHARACTER NAME

_[overlapping]_ -- when one character speaks over another, you should start a new dialog block like this. _[DON'T put interjections from other characters in here -- that can mess up the output formatting]_

*Italic, or "slightly-emphasized" text,* has asterisks around it.

__Boldface, or "really-emphasized" text,__ has double-underscores around it.

(_Single underscores also work for italics,_ but I reserve use those for _[the interjection-style captions]._ And **double-asterisks also work for boldface,** but I think it looks weird.)

<u>There's no built-in way to underline text in Markdown</u> -- it thinks two ways of emphasizing text are enough.

Never put spaces* immediately on the inside of the emphasized text * like this. __It's ugly, __and sometimes the output doesn't display right. (It's broken in my own preview right now.)

Also, try to avoid _cut_ting words in half with emphasis, like I just did. Again, it looks weird and tends to mess up the output.

When it's necessary to emphasize only part of the word, do the _cut_-ting with a hyphen at the "broken" spot, on the outside of the emphasized part of the word. This will help minimize readability problems.

When you emphasize *"text beginning or ending in punctuation like quotes or commas,"* you should try to emphasize the punctuation, too. The reason for those is that some fonts/renderer combinations will, in this situation, either merge the punctuation with the letters at the beginning and end of the text, or put a big unnecessary space in between.

(You're probably reading this on a recent web browser and OS that don't have this problem, but writing for *ultra-maximum accessibility* means thinking about portability to older devices, and to specially-built hardware that may not support clear font rendering.)

#### NAME & OTHER NAME

#### NAME, OTHER NAME & ANOTHER NAME

*Oh, no!*

Several people saying something at the same time looks like that.

When one character is quoting another, "the quoted text should look be in plain non-directional double-quotes like this." (Markdown will, by default, turn these into directional quotes.)

> A longer quote (like a recording being played, or a letter being read) has a greater-than sign before each line.
> 
> Each new line is separated by a blank line with another greater-than-sign.
> 
> -- signed, snarp

> If you need to start a new quote (like, to emphasize that the character is now reading a different letter), put a blank line in between.

You can add a section divider by putting six hyphens in a row on a line by themselves:


------


Technically, three hyphens are enough to make a divider -- but three-hyphen sets are also what you use to mark out [YAML-format metadata](https://yaml.org/) from a document's body, so it's best to use more. Several popular pieces of eBook-generating software use YAML, as does Jekyll, the website backend I'm using here.

Be VERY sure to put blank lines between dividers and text, or... 

...you get big header text.
------

If you need to make a footnote, do this.[^1]

[^1]: It will appear at the very end of the document, no matter where you put it.

We wrote the footnote above this line, but it appeared down at the bottom of the page.[^2]

[^2]: You can make a multi-paragraph footnote by indenting the paragraph line by four spaces.

    But please note that not all Markdown processors can handle footnotes at all, and multi-paragraph ones like this will look especially weird on those.

You can also make footnotes with names instead of numbers, if you want...[^ifyouwant]

[^ifyouwant]: ...but the names won't show up in the output; this'll just say "3."

You can link to the same footnote multiple times.[^2]

# The Really-Subjective Stuff

St-st-stuttering will use a single hyphen with no spaces, if just *part* of a word is being stuttered.

But -- but stuttering -- stuttering -- stuttering will instead use double-hyphens with spaces around them, if a whole word is being repeated.

Stuttering... it, it, it can also use commas like this, if we're stuck on a one-syllable word.

-- and you also use two hyphens if for the continuation of a thought on a new line, like this.

If a word is cut off and never continued, it looks like thi-- (Double-hyphens again, no space before them, one space or end-of-line after them.)

--is. (If you start a line with a cut-off word, don't put any space around the double-hyphens.)

Following these rules, it should never happen, but be very careful never to start a line with a hypen and then a single space, 

- because it will look like a list item.

* (Same with an asterisk and a space.)

Most Markdown processors will by default merge double-hyphens into a long "em-bar." This looks better in most commonly-used fonts as of 2020, but some older fonts may not display it correctly, and any sort of conversion that changes the character set is likely to break it.