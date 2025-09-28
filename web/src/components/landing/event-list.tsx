import React from "react";
import ScrollableDialog from "./scrollabe-dialog";
import CustomText from "../custom-text";

const EventList = () => {
    return (
        <section className="min-h-screen py-20 px-4 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16 relative">
            <div className="sm:col-span-1 col-span-1 w-full order-2 sm:order-1 sticky top-24 h-fit border-t-6 pt-5">
                <div className="relative">
                    <img
                        src="/assets/ninjas/2.png"
                        alt=""
                        className="absolute w-3/4 right-0 top-1/2  z-0"
                    />
                    <h1 className="text-6xl font-bowlby tracking-wide relative z-10 text-primary text-stroke">
                        What <br /> We've <br /> Done
                    </h1>
                </div>
            </div>
            <div className=" sm:col-span-2 col-span-1 order-1 sm:order-2 h-[200vh] flex flex-col pt-5 gap-10">
                {/* <ScrollableDialog /> */}

                {/* <CustomText
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit eius architecto quisquam non voluptatem qui nesciunt exercitationem, dolore blanditiis quia accusamus error optio recusandae provident ut assumenda totam culpa!
                Perspiciatis libero commodi dolorem corporis dolores molestias, dolorum officia molestiae eos voluptatibus fugit impedit eaque similique tempora atque iure asperiores nam nemo minima hic quasi sed. Consequuntur dolores quam sit.
                Doloribus, repudiandae non aut optio repellendus impedit earum odio a expedita, aperiam amet! Deserunt odit harum odio dolores omnis voluptatum id temporibus. Ducimus ipsam, unde harum repellendus voluptas tempore doloribus!
                Nobis placeat cum voluptatibus tenetur, quaerat est atque ratione, sed reprehenderit quod, eum doloribus suscipit blanditiis in enim totam. Non temporibus doloremque necessitatibus impedit inventore reprehenderit, odit sed veritatis ad.
                Molestias soluta accusantium quos a maiores ad in facere natus praesentium debitis neque consequatur officia, fugiat et ratione, esse quam non? Totam molestias eveniet nihil fugit voluptatem eum optio minima!"
                    className="font-bowlby text-5xl"
                /> */}

                {Array.from({ length: 5 }).map((_, i) => (
                    <h1 className="text-5xl font-bowlby truncate overflow-ellipsis whitespace-nowrap hover:underline">
                        Festival Floral Wonderland {i + 1}
                    </h1>
                ))}
            </div>
        </section>
    );
};

export default EventList;
