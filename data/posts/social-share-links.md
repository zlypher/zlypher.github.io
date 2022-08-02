---
layout: post
title:  "Social Share Links"
date:   2018-01-15 15:32:00 +0200
---

## The Problem

Quite a few pages need social share links nowadays. Product pages, blog posts, news articles, ... They are basically everywhere. There are quite a lot of libraries and plugins available which provide the desired functionality. However, they often rely on additional JavaScript being loaded and come with a lot of unnecessary stuff.

But don't forget! Most of them are ordinary links, which don't require anything except a link tag. So how can you add the most common social share links to your page?

## Social Links

**Facebook**

Facebook is probably one of the most popular social networks. Unfortunately, you can only share a URL, but you can't prefill the text to comment. Therefore, the share link is rather straight forward:

`https://www.facebook.com/sharer/sharer.php?u=[SHARE URL]`

Just remember, that `[SHARE URL]` has to be a valid URL, or the link won't work.

**Twitter**

Next on the list is twitter. By specifying the `[SHARE TEXT]` it is possible the prefill the tweet with any textual content you like:

`https://twitter.com/intent/tweet/?text=[SHARE TEXT]`
`https://twitter.com/home?status=[SHARE TEXT]` (works as well)

**Whats App**

To enable sharing via WhatsApp, one can use the following link. For WhatsApp it is possible to specify content, which will be prefilled. If the user has WhatsApp installed, this link will open the App and ask to select a contact to send the message to.

`whatsapp://send?text=[SHARE TEXT]`

This share link only makes sense on mobile (maybe tablet as well) devices. So be sure to include appropriate checks, or your users might get confused.

**E-Mail**

E-Mail is the next one on the list. Old, but still used to share links and information. Just as you might have imagined, you can specify a receiver email adress, a subject and the content of the email:

`mailto:[TO EMAIL]?subject=[SHARE TITLE]&body=[SHARE TEXT]`

The `[TO EMAIL]` part is completely optional. If it is not specified, the email agent will prepare the email with the given subject and body.

**SMS**

SMS share links are a bit special. Different behaviour on Android and iOS. You don't actually have to set a [PHONE NUMBER]. If you leave it blank the user will be able to select a recipient. The message will be prefilled with the given text.

`sms:[PHONE NUMBER]?body=[SHARE TEXT]`

*(This link will only work on Android though. See Update for further details)*

## Others

There are a lot of other social networks and ways to share content. But don't worry, there are a lot of resources available online, where you can [generate social](http://www.sharelinkgenerator.com/) [share links](https://sharingbuttons.io/) or check the [share urls](https://github.com/bradvin/social-share-urls).

## Conclusion

To sum up, it is very easy to get started and integrate social share links into your website.

<section class="c-mind" markdown="1">
**Keep in Mind:** Don't forget to URL encode the text content you want to share with these links.
</section>


Read up on this topic:
* [StackOverflow answer regarding SMS share link](https://stackoverflow.com/a/19126326/733368)

<section class="c-update" markdown="1">
**Update 2018-01-18:**

It appears, that iOS handles the SMS share links differently than Android. Android accepts a link format like `sms:[PHONE NO]?body=[TEXT CONTENT]`. However, this will fail on iOS. Instead you have to use `sms:[PHONE NO];body=[TEXT CONTENT]` for old iOS versions and `sms:[PHONE NO]&body=[TEXT CONTENT]` for iOS 8 and above. Take note of the delimiter in front of the body parameter!

Check out [How to pre-populate the sms body text via an html link](https://stackoverflow.com/q/6480462/733368) via StackOverflow.
</section>