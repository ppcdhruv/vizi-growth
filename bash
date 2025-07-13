cd path/to/vizi-growth          # go into your project
git init                        # start a repo
echo "node_modules/
.next/
out/
.env*
.DS_Store" > .gitignore         # ignore heavy / secret stuff

git add .
git commit -m "Initial commit 🎉"
