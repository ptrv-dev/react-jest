import React from 'react';

const HomePage = () => {
  const [isMore, setMore] = React.useState(false);

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam
        voluptas voluptatem quam ipsum. Doloribus, in. Totam assumenda amet
        beatae?
      </p>
      <hr />
      <button onClick={() => setMore((prev) => !prev)}>Toggle text</button>
      {isMore && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quia labore illum error quo magni neque aliquam nesciunt? Provident,
          corrupti temporibus nesciunt, repudiandae necessitatibus accusamus
          nemo facere, autem tempora quia adipisci sint laborum non quam!
          Tempora laborum explicabo laboriosam voluptate ea ad hic veritatis in
          eius, tempore cupiditate nulla voluptatem voluptas? Illum sed ipsam
          dignissimos libero quae non at aut, modi tenetur dolorem inventore
          perferendis voluptate doloribus suscipit voluptas laborum quo.
          Officiis dolorum accusantium tenetur, suscipit eius ipsa illo nemo,
          corrupti iure a accusamus, magnam consequatur corporis omnis ab
          deserunt deleniti sunt voluptates? Quam, odio aut? Earum repudiandae
          accusamus pariatur.
        </p>
      )}
    </div>
  );
};

export default HomePage;
