---
layout: post
title: Git Merge Conflicts
description: What are git merge conflicts
date:   2018-05-22 21:29:00 +0100
---

Today I came across a question regarding merge conflicts with git from a teammate:

"Can I use Visual Studio to resolve merge conflicts or is it required to use a merge tool?"

At first I was surprised by this question but then I realized, that git merge conflicts might be a black box for some developers. So what exactly are merge conflicts?

Normally git is pretty good in merging changes from different branches, since these changes are often in different files. However, if two or more people try to merge changens to the same lines, merge conflicts are likely to occur. In these circumstances, git is not able to automatically determine which changes should end up in the merged version.

To resolve this issue, manual intervention is needed. To make it easy for developers to see, what has been changed, git adds conflict markers to the file.

```
Q: What shall I do in case of a merge conflict?
<<<<<<< HEAD
A: Panic!
=======
B: Stay calm!
>>>>>>> other-branch
```

So what is there left to do in case of a merge conflict? You need to remove the unwanted change and delete the conflicts markers. So that only the code/text is left that you actually want. Commit and you are done.

And what is the difference to visual merge tools? Basically there is none. They only thing these tools offer is the "visual" part. The highlight the changes from the different branches a bit nicer - often side by side - than an ordinary text editor. However, modern text editors like Atom or [Visual Code normally provide pretty good help with merging](https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts) as well.

So the next time you encounter a merge conflict, don't fret! Remember that merge conflicts can - in most cases easily - be resolved by opening the file in an text editor and removing the unwanted text as well as the conflict markers.

GitHub has pretty good articles on dealing with [merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) and [resolving merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line), so be sure to check them out.