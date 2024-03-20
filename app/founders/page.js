import ReverseArticle from "@/src/reverse-article/reverse-article";

export default function Page() {
  return (
    <>
      <ReverseArticle
        src={"/founders-1.png"}
        alt={"old bloke"}
        h3Text={"Our craftsmanship"}
        pText={"Mike and mandy..."}
      />
      <ReverseArticle
        src={"/founders-2.png"}
        alt={"old bloke"}
        h3Text={"Random bollocks"}
        pText={"More random bollocks"}
      />
      <ReverseArticle
        src={"/founders-3.png"}
        alt={"old bloke"}
        h3Text={"stupid shite"}
        pText={`more stupid shite: Repudiandae vitae ab tempore fugit veritatis porro eos doloremque quis. Officia cumque qui eius quo tenetur officiis sed ex aliquam quis pariatur. Doloribus distinctio quasi quibusdam aut rerum voluptatum quo
        Laudantium sapiente porro odio fuga alias accusantium libero earum officia voluptatem, repellat reprehenderit vel temporibus pariatur quaerat nihil unde ullam? Facilis id deserunt est tenetur soluta quisquam iusto repellendus et.
        Magni, dicta! Perferendis ipsa provident incidunt odit voluptatem nihil, commodi quia assumenda, reiciendis expedita, numquam qui magni deleniti voluptates ex maiores deserunt optio. Iure dolorum quis repudiandae rem! Eum, dolorum.`}
      />
    </>
  );
}
