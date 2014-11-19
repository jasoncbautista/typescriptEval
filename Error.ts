function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
 

// error
<span class="skimlinks-unlinked">document.body.innerHTML</span> = area("rectangle", "width", 15); // wrong width type
