import { StarIcon } from "lucide-react";
import React, { useState } from "react";

const ProductIdNav = (data) => {
  const [review, setReview] = useState(data.data.reviews);
  console.log(data.data.reviews);
  console.log(review);
  return (
    <div>
      <div>
        <div className="grid p-5 md:text-lg font-sans  h-[80vh] w-[100vw] md:grid-cols-2 grid-cols-1 items-center">
          <div className="  flex justify-center  ">
            <img
              className="w-[350px]  rounded-lg shadow-lg"
              src={data.data.imageUrl}
              alt={data.data.name}
            />
          </div>
          <div>
            Name:{data.data.name} ({data.data.category})
            <div>Description:{data.data.description}</div>
            <div className="flex gap-1">
              Price:{data.data.price}
              <div className="flex w-[50px]  border border-green-400 pl-2 rounded-md text-sm bg-green-400 text-white pr-2">
                <div>{data.data.rating}</div>
                <div className="p-[2px]">
                  <StarIcon className="  w-[15px] h-[15px]" props="hii" />
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="md:flex items-center gap-10 justify-center">
                <div>
                  <img className="w-[300px]" src="/Cuboid1.png" alt="" />
                </div>
                <div>
                  <div>
                    Depth-{data.data.dimensions && data.data.dimensions.depth}
                  </div>
                  <div>
                    Height-{data.data.dimensions && data.data.dimensions.height}
                  </div>
                  <div>
                    Length-{data.data.dimensions && data.data.dimensions.width}
                  </div>
                </div>
              </div>

              <hr />
              <div>Material:{data.data.material}</div>
              <div className="flex items-center">
                <div>Available Color : </div>
                <div
                  style={{
                    marginLeft: "5px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    backgroundColor: `${data.data.color}`,
                  }}
                ></div>
              </div>
              <div>Stock:{data.data.stock}</div>
              <hr />
              <span>Reviews:</span>
              <div>
                {data.data.reviews &&
                  data.data.reviews.map((item, index) => {
                    return (
                      <>
                        <div key={index}>
                          <div>
                            <div>{item.author}</div>
                            <div>{item.rating}</div>
                            <div>{item.comment}</div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
              {/* <span>{data.dimensions.width}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdNav;
