class ProductClient {
  fetchItems() {
    return fetch('http://example.com/login/id+password').then((res) =>
      res.json()
    );
  }
}

module.exports = ProductClient;
