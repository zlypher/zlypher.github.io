---
layout: post
title: Fail API - An API that fails your requests
description: Simulate error scenarios for API calls with Fail API
date:   2018-09-20 22:08:00 +0200
---

During development of using a REST API, a difficult and tricky part is always edge and error cases. Does the code work fine, if the API returns a 500 error? What about a 429 response? 418?

That is what ["Fail API"]((https://github.com/zlypher/fail-api)) can help you with. It provides simple routes to check various response codes, so that you can be confident that your code handles various cases correctly.

You can use the hosted version at https://fail-api.developr.at or host it yourself. The API endpoint answers your request with the status code you pass as a parameter and the default text for the status code.

**Examples**

```bash
> curl https://fail-api.developr.at/fail/404
Nout Found
> curl https://fail-api.developr.at/fail/429
Too Many Requests
```

So give it a try! I'd love to hear your feedback on this little project.

**Resources**
* [zlypher/fail-api GitHub Repository](https://github.com/zlypher/fail-api)
* [Fail API - Rest Endpoint](https://fail-api.developr.at/fail/418)
* [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)