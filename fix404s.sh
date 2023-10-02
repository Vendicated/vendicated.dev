for path in dist/*/404; do
    mv "$path/index.html" "$path.html"
    rmdir "$path"
done
