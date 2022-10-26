class Poster {
  constructor(imageURL, title, quote) {
    // Date.now creates a unique ID in a standard format
    // that allows us to reference the objects we create
    this.id = Date.now();
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}