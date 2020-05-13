---
templateKey: blog-post
title: REMOVE GOOGLE AUTHENTICATOR FROM SSH LOGINS
date: 2018-05-07T16:33:00.000Z
description: I used the Google authenticator for quite some time now and i must
  say i like it. As showed in my  earlier article on how to install the Google
  authenticator app it is pretty straightforward to install the second
  authentication factor.
featuredpost: false
featuredimage: /img/padlock-149771_640.png
tags:
  - remove google authenticator ssh
---
But is it also easy to uninstall the feature? Yes it is.

**Step 1:**

Make sure -in case something goes wrong- that you (temporarily) have alternative ways to access your server. Think of console access or even (watch carefully) telnet access.



**Step 2:**

Disable ChallengeResponseAuthentication within your SSH configuration:

```
user@server:~$ vi /etc/ssh/sshd_config
```

Change the value from **yes** to **no**

```
ChallengeResponseAuthentication no
```

Save the changes.

**Step 3:**

Change your /etc/pam.d/ssh configuration:

```
user@server:~$ vi /etc/pam.d/sshd
```

Remove or comment-out the following line:

```
auth required pam_google_authenticator.so
```

Save the changes.

**Step 4:**

Remove the**.google_authenticator** file from **each** of the home directories of users that you used the Google authenticator app for.

```
user@server:~$ rm .google_authenticator
```

**Step 5:**

Restart the SSH daemon.

```
user@server:~$ sudo /etc/ssh/ssh restart
```

That should be it!