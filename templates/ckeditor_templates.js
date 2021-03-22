// Override the default template set
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.  Determine base path of drupal installation if any
	// (ckeditor could possibly be loaded w/o drupalSettings).
	imagesPath: ((drupalSettings && drupalSettings.path) ? drupalSettings.path.baseUrl : '/') + 'themes/custom/lib_barrio/images/template-thumbnails/',

	// The templates definitions.
	templates: [ {
		title: 'Image and Title module',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: '<h3>' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />' +
			'Type the title here' +
			'</h3>' +
			'<p>' +
			'Type the text here' +
			'</p>'
	},
	{
		title: 'Strange Template',
		image: 'template2.gif',
		description: 'A template that defines two colums, each one with a title, and some text.',
		html: '<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
			'<tr>' +
				'<td style="width:50%">' +
					'<h3>Title 1</h3>' +
				'</td>' +
				'<td></td>' +
				'<td style="width:50%">' +
					'<h3>Title 2</h3>' +
				'</td>' +
			'</tr>' +
			'<tr>' +
				'<td>' +
					'Text 1' +
				'</td>' +
				'<td></td>' +
				'<td>' +
					'Text 2' +
				'</td>' +
			'</tr>' +
			'</table>' +
			'<p>' +
			'More text goes here.' +
			'</p>'
	},
	{
		title: 'Text and Table',
		image: 'template3.gif',
		description: 'A title with some text and a table.',
		html: '<div style="width: 80%">' +
			'<h3>' +
				'Title goes here' +
			'</h3>' +
			'<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
				'<caption style="border:solid 1px black">' +
					'<strong>Table title</strong>' +
				'</caption>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
			'</table>' +
			'<p>' +
				'Type the text here' +
			'</p>' +
			'</div>'
	},
		{
			title: 'Blockquote (Default)',
			image: 'template3.gif',
			description: 'Blockquote with a black icon.',
			html: '<blockquote class="ws2-element-spacing-entity">' +
					'<p>' +
					'Type the text here. It can include links, etc.' +
					'Signature and byline are optional.' +
					'</p>' +
					'<cite class="ws2-sig-title">Signature/Name</cite>' +
					'<cite class="ws2-sig-byline">Sig byline</cite>' +
					'</blockquote>'
		},
		{
			title: 'Blockquote (Image)',
			image: 'template3.gif',
			description: 'Blockquote with an image.',
			html: '<blockquote class="ws2-bq ws2-bq-image ws2-element-gray ws2-element-style ws2-element-spacing-entity">' +
					'<img src=" " alt="" height="100" width="100" />' +
					'<p>' +
					'Type the text here. It can include links, etc.<br>' +
					'The text should be at least 4-5 lines plus signature<br>' +
					'to balance the image.' +
					'Signature and byline are optional.' +
					'</p>' +
					'<cite class="ws2-sig-title">Signature/Name</cite>' +
					'<cite class="ws2-sig-byline">Sig byline</cite>' +
					'</blockquote>'
		},
		{
			title: 'Blockquote (Background)',
			image: 'template3.gif',
			description: 'Blockquote with a gray background.',
			html: '<blockquote class="ws2-element-alt ws2-element-alt-gray ws2-element-alt-no-padding ws2-element-spacing-entity-full">' +
					'<p>' +
					'Type the text here. It can include links, etc.' +
					'Signature and byline are optional.' +
					'</p>' +
					'<cite class="ws2-sig-title">Signature/Name</cite>' +
					'<cite class="ws2-sig-byline">Sig byline</cite>' +
					'</blockquote>'
		},
		{
			title: 'Unordered list',
			image: 'template3.gif',
			description: 'Default style.',
			html: '<ul class="uds-list"' +
					'<li>' +
					'First item in the list' +
					'</li>' +
					'</ul>'
		},
		{
			title: 'Ordered list',
			image: 'template3.gif',
			description: 'Default style.',
			html: '<ol class="uds-list"' +
					'<li>' +
					'First item in the list' +
					'</li>' +
					'</ol>'
		},
		{
			title: 'Foldable card',
			image: 'template3.gif',
			description: 'A single expanding card. Accordions should be added as an Accordion content section.',
			html: '<div class="card card-foldable">' +
					'<div class="card-header">' +
					'<h4>' +
					'<a id="folding-header-1" class="collapsed" data-toggle="collapse" href="#folding-content-1" role="button" aria-expanded="false" aria-controls="folding-content-1">' +
					'Recommended character limit of 75 characters for expanding card titles.' +
					'<span class="fas fa-chevron-up"></span>' +
					'</a>' +
					'</h4>' +
					'</div>' +
					'<div id="folding-content-1" class="collapse card-body" aria-labelledby="folding-header-1">' +
					'<h4>Content can have headlines</h4>' +
					'Important note: if you have more than one foldable card on a page, you must edit the HTML and change the "folding-header-1" and "folding-content-1" references to be unique per card.' +
					'</div>' +
					'</div>'
		}
	]
} );
