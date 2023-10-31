
# Android ProGuard-Directory 
This repository contains ProGuard configuration for optimizing and obfuscating your Android project. 
ProGuard helps reduce the size of the APK, enhances performance, and adds a layer of security by obfuscating the code.


## Steps to contribute
1. Fork this repo (using top right button).
2. Clone forked repo using `git clone`. on your local system. (You can edit the repo in browser itselt click . (dot) to open in-browser vs-code)
3. Create new file in `proguards`directory or use this [link](https://github.com/yogeshpaliyal/ProGuard-Directory/new/main/proguards) to create file.
4.  create file name with libraryName and extension as `.json`.
```json
{
  "name": "<Library Name>",
  "link": "<Proguard File Link>"
}
```
5. Push the new file to new branch.
6. Raise A PR.
7. On Successfully review and merge in `main` branch, the site will be deployed automatically.
