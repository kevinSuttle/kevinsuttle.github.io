I have a confession to make: I rarely buy physical books anymore. I do like to support my local comic shop, so I'll make a trip once a month or so to pick up some back issues of my favorite graphic novels or to discover some new stories. I have another confession to make: I think eBooks are *terrible*. 

90% of my personal collection of books are digital, and save a few, I hate most of them. If you'll allow me, I'd like to quickly share a few irks that I have with the current eBook landscape, and then express my vision for how I believe we as designers and developers of the web can make a difference. 

## A few nits with ePub
If you've ever tried to read a programming book on your eReader, you'll know that code samples are less than useless in fixed formats. The formatting nearly never matches how it should be read or written, and there is no syntax highlighting to speak of if you've changed the “theme” of the reader itself. 

If you've tried reading design books on your eReader, screenshots are crammed to fit a specific page size—an exercise in frustration when you need to see exactly which UI element is being referenced in the text.

## The double-edged sword: PDFs
I only choose PDF verions of design or development eBooks. The most obvious reason is that I get to see the book exactly as the publisher intended me to see it, not in the faceless package that most ePub and mobi formats come in. 

The [Portable Document Format](http://www.adobe.com/products/acrobat/adobepdf.html) “encapsulates a complete description of a fixed-layout flat document”. That description is perfect for most eBooks in PDF format, though vector formatting enjoys native support. Zooming in on text that renders crisply is a sure benefit, though tedious, and in this reader's opinion, no way to read a book. 

Hopeful, I dug into Acrobat developer documentation, eager to discover support that would assist in multi-device rendering and layout at runtime. Unfortunately, once a document has been processed and packaged into the PDF format, that's it. The API is locked down [[ironically, in PDF format]](http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/js_api_reference.pdf). 


## But aren't eBooks built on web standards?
Yes and no. Amazon's [Kindle 8 Format](http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000729511) has support for a [decent subset](http://www.amazon.com/gp/feature.html/ref=amb_link_357613442_1?ie=UTF8&docId=1000729901&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-5&pf_rd_r=1QZ80C3WG0RHHT5Z1ZTN&pf_rd_t=1401&pf_rd_p=1321300302&pf_rd_i=1000729511) of HTML5 and CSS, but the entire mobi “standard” feels piecemealed and beleaguered by ambiguity, and only work properly on certain Kindle devices. 

ePubs are essentially special zipped up web files (mimetype:`application/epub+zip`) packaged with several accompanying XML files to work within a certain range of environments. 

```
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
	<rootfiles>
		<rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
	</rootfiles>
</container>
```

![]()