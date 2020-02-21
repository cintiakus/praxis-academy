asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git init
Reinitialized existing Git repository in C:/cintia praktik 1/rhymes/.git/

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ touch read.txt

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git add readme.txt
asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git commit -m 'First commit.'
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
        read.txt

nothing added to commit but untracked files present

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        read.txt

nothing added to commit but untracked files present (use "git add" to track)

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git diff

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        read.txt

no changes added to commit (use "git add" and/or "git commit -a")

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index c83e022..9ef4a73 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1,2 @@
 This repo is a collection of my favorite nursery rhymes.
+This repo is a collection of my favorite nursery rhymes.

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git commit -m 'Added project overview to README.txt'
[master f02e3cf] Added project overview to README.txt
 1 file changed, 1 insertion(+)

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git add all-around-the-mulberry-bush.txt

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        read.txt

nothing added to commit but untracked files present (use "git add" to track)

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
        read.txt

nothing added to commit but untracked files present

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git add jack-and-jill.txt

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git commit -m 'Added jack-and-jill.txt.'
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
        read.txt

nothing added to commit but untracked files present

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git add .

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master 83c3c4c] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 read.txt

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git log
commit 83c3c4c5c40b612a565affe48738feca7f43d7ac (HEAD -> master)
Author: cintiakus <cintia1700016127@webmail.uad.ac.id>
Date:   Fri Feb 21 00:17:45 2020 +1400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit f02e3cf755d54c5a7d8044f8876b66043e0afbf9
Author: cintiakus <cintia1700016127@webmail.uad.ac.id>
Date:   Fri Feb 21 00:13:49 2020 +1400

commit 83c3c4c5c40b612a565affe48738feca7f43d7ac (HEAD -> master)
Author: cintiakus <cintia1700016127@webmail.uad.ac.id>
Date:   Fri Feb 21 00:17:45 2020 +1400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit f02e3cf755d54c5a7d8044f8876b66043e0afbf9
    Added project overview to README.txt

commit ba50852e6f8d094ab6d93908a5fda11a911e6e93 (origin/master, origin/HEAD)
Author: Bryan Hirsch <bryan@bryanhirsch.com>
Date:   Mon Jun 8 13:09:27 2015 -0400

    Added government version of roses are red.

            new file:   roses-are-red.txt

commit 4b153702f71a789d019f6b5734fc29a10021d898
Author: Bob <bob@example.com>
Date:   Fri Jun 14 17:09:10 2013 -0400

    Added hickory-dickory-dock.txt.

commit 4ada88186d892571940b8735a0052df258a91b30
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit 10e0e68f1f22b0726f6b6e0a3e5080970a044151
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added jack-and-jill.txt.

commit 6a69e0fc35d884d8bd005191b2ac21f3a90538a1
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added all-around-the-mulberry-bush.txt.

commit d30493a31fd087a7a2f1a0d2d020eba1d1cab61d
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:31 2013 -0400

    Added project overview to README.txt

commit 710f4bddb6592980a7c168a2dcd83ecd9b30b27a

bash: it: command not found

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git log -p
commit 83c3c4c5c40b612a565affe48738feca7f43d7ac (HEAD -> master)
Author: cintiakus <cintia1700016127@webmail.uad.ac.id>
Date:   Fri Feb 21 00:17:45 2020 +1400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/read.txt b/read.txt
new file mode 100644
index 0000000..e69de29

commit f02e3cf755d54c5a7d8044f8876b66043e0afbf9
Author: cintiakus <cintia1700016127@webmail.uad.ac.id>
Date:   Fri Feb 21 00:13:49 2020 +1400

    Added project overview to README.txt

diff --git a/README.txt b/README.txt
index c83e022..9ef4a73 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1,2 @@
 This repo is a collection of my favorite nursery rhymes.
+This repo is a collection of my favorite nursery rhymes.

commit ba50852e6f8d094ab6d93908a5fda11a911e6e93 (origin/master, origin/HEAD)
Author: Bryan Hirsch <bryan@bryanhirsch.com>
Date:   Mon Jun 8 13:09:27 2015 -0400

    Added government version of roses are red.

            new file:   roses-are-red.txt

diff --git a/roses-are-red.txt b/roses-are-red.txt
new file mode 100644
index 0000000..efba165
--- /dev/null
+++ b/roses-are-red.txt
@@ -0,0 +1,8 @@
+Roses are red
+-------------
+
+Roses are red
+Violets are blue
+Nobody loves GitHub
+More than government agencies do!
+

commit 4b153702f71a789d019f6b5734fc29a10021d898
Author: Bob <bob@example.com>
Date:   Fri Jun 14 17:09:10 2013 -0400

    Added hickory-dickory-dock.txt.

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.

commit 4ada88186d892571940b8735a0052df258a91b30
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
+
+You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
+She went to the baker's
+To buy him some bread;
+But when she came back
+The poor dog was dead.
+
+She went to the undertaker's
+To buy him a coffin;
+But when she came back
+The poor dog was laughing.
+
+She went to the hatter's
+To buy him a hat;
+But when she came back
+He was feeding the cat.
+
+The dame made a curtsey,
+The dog made a bow;
+The dame said, "Your servant."
+The dog said, "Bow wow!"
diff --git a/twinkle-twinkle.txt b/twinkle-twinkle.txt
new file mode 100644
index 0000000..5585462
--- /dev/null
+++ b/twinkle-twinkle.txt
@@ -0,0 +1,6 @@
+Twinkle, twinkle, little star,
+How I wonder what you are.
+Up above the world so high,
+Like a diamond in the sky.
+Twinkle, twinkle, little star,
+How I wonder what you are.

commit 10e0e68f1f22b0726f6b6e0a3e5080970a044151
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added jack-and-jill.txt.

diff --git a/jack-and-jill.txt b/jack-and-jill.txt
new file mode 100644
index 0000000..1596bce
--- /dev/null
+++ b/jack-and-jill.txt
@@ -0,0 +1,12 @@
+Jack and Jill
+Went up the hill
+To fetch a pail of water.
+Jack fell down
+And broke his crown
+And Jill came tumbling after.
+Up Jack got
+And home did trot
+As fast as he could caper
+Went to bed
+And plastered his head
+With vinegar and brown paper.

commit 6a69e0fc35d884d8bd005191b2ac21f3a90538a1
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added all-around-the-mulberry-bush.txt.

    Added all-around-the-mulberry-bush.txt.

diff --git a/all-around-the-mulberry-bush.txt b/all-around-the-mulberry-bush.txt
new file mode 100644
index 0000000..b77d989
--- /dev/null
+++ b/all-around-the-mulberry-bush.txt
@@ -0,0 +1,19 @@
+All around the mulberry bush
+The monkey chased the weasel.
+The monkey thought 'twas all in fun.
+Pop! goes the weasel.
+
+A penny for a spool of thread,
+A penny for a needle.
+That's the way the money goes.
+Pop! goes the weasel.
+
+Up and down the City Road,
+In and out of the Eagle,
+That's the way the money goes.
+Pop! goes the weasel.
+
+Half a pound of tuppenney rice,
+Half a pound of treacle,
+Mix it up and make it nice,
+Pop! goes the weasel.

commit d30493a31fd087a7a2f1a0d2d020eba1d1cab61d
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:31 2013 -0400

    Added project overview to README.txt

diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

commit 710f4bddb6592980a7c168a2dcd83ecd9b30b27a
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:30 2013 -0400

    First commit.

diff --git a/README.txt b/README.txt
asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git remote add origin https://github.com/cintiakus/tugas-kemampuan-dasar-2.git

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git push -u origin master
To https://github.com/cintiakus/tugas-kemampuan-dasar-2.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/cintiakus/tugas-kemampuan-dasar-2.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

asus@DESKTOP-98O1J1U MINGW64 /c/cintia praktik 1/rhymes (master)
$ git push --force origin master
Enumerating objects: 28, done.
Counting objects: 100% (28/28), done.
Delta compression using up to 4 threads
Compressing objects: 100% (25/25), done.
Writing objects: 100% (28/28), 3.33 KiB | 154.00 KiB/s, done.
Total 28 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), done.
To https://github.com/cintiakus/tugas-kemampuan-dasar-2.git
 + 805a318...83c3c4c master -> master (forced update)
