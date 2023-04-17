class TinDog {
  constructor(data) {
    Object.assign(this, data);
  }

  getcrossHtml() {
    return `
         <div class = "crossimgdiv">
           <img 
           src = "images/badge-nope.png"
           />
         </div>
      `;
  }

  getLikeHtml() {
    return `
      <div class = "crossimgdiv">
          <img 
          src = "images/badge-like.png"
          />
      </div>
      `;
  }

  getTinDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
      <div id = "dogImages" class="image-container" style="background-image: url(${avatar})">
          <div class="dogs-intro">
              <h3>${name}</h3>
              <p>${bio}</p>
          </div>
      </div>    
          `;
  }
}
export default TinDog;
