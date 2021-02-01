for f in *.yml; do 
    mv -- "$f" "${f%.yml}.json"
done
