function importAll(r: __WebpackModuleApi.RequireContext) {
    let images: { [key: string]: string } = {};
    r.keys().map((item: string, index: number) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
const images = importAll(require.context('../assets/images/products', false, /\.(jpg|jpeg|png)$/));
  
export default images;