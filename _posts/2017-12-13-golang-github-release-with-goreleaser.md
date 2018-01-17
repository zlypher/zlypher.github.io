---
layout: post
title:  "Go - Create GitHub Releases with GoReleaser"
date:   2017-12-13 22:45:00 +0200
---

So you just finished your neat little go project and want to distribute it via [Github Releases](https://help.github.com/articles/about-releases/){:target="_blank" rel="noopener noreferer"}. Fear not! [GoReleaser](https://goreleaser.com/){:target="_blank" rel="noopener noreferer"} is an amazing tool to get you started with only a few steps.

**Requirements:**
- Go
- Github Repository
- Github Token

## Steps

1. First of all install the latest version of GoReleaser (for example via `go get`)

    ```bash
    go get github.com/goreleaser/goreleaser
    ```

2. Create your configuration file (`.goreleaser.yml`). A basic one looks something like this:

    ```yml
    # .goreleaser.yml
    builds:
      - binary: awesome-project
        goos:
          - windows
          - darwin
          - linux
        goarch:
          - amd64
    ```

3. Make sure to create a Github Token and add it as an environment variable as `GITHUB_TOKEN`. [Find out how to create your Github Token](https://github.com/blog/1509-personal-api-tokens){:target="_blank" rel="noopener noreferer"}

    ```bash
    export GITHUB_TOKEN=4a68...
    ```

4. Make sure to push at least one tag (GoReleaser uses the latest tag of your repository)

    ```bash
    git tag -a v0.0.1 -m "Release Test"
    git push origin v0.0.1
    ```

5. Run GoReleaser

    ```bash
    goreleaser
    ```

6. Profit!

You now have your first release for your github repository complete with downloadable versions for multiple plattforms and a Changelog with all your commits since the previous tag.

## Conclusion

GoReleaser is an amazing tool which works exceptionally well and was really painless to setup.

Read up on this topic:
* [GoReleaser Website](https://goreleaser.com/){:target="_blank" rel="noopener noreferer"}
* [GoReleaser Github Repository](https://github.com/goreleaser/goreleaser){:target="_blank" rel="noopener noreferer"}