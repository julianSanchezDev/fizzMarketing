import React from "react";

const CardRellenos = () => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row">
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src="/public/img1.jpeg" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src="/public/img2.jpeg" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src="/public/img3.jpeg" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src="/public/img4.jpeg" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
</div>

  
  
  );
};

export default CardRellenos;
