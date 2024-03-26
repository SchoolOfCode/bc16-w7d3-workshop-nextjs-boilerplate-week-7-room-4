import ReverseArticle from "@/src/reverse-article/reverse-article";

export default function Page() {
  return (
    <>
      <div className="founders-orange-box">
        <h2>Meet the artisans behind our masterpieces!</h2>
        <h2>
          Mike and Mandy studied and honed their craft under the fireplace
          sensei Vik Von Blaze. Nothing gets delivered to a customer without
          their sign off.
        </h2>
        <img src="/founder-mike-and-mandy.png"></img>
      </div>
      <div className="founders-card">
        <h2>Our craftsmanship</h2>
        <p>
          Numbers don't lie - we've been around for 20+ years and have a long
          list of happy customers who gladly recommend us.
        </p>
        <img src="/founders-1.png"></img>
      </div>
      <div className="founders-card">
        <h2>Our experience</h2>
        <p></p>
        <img src="/founders-2.png"></img>
      </div>
      <div className="founders-card">
        <h2>Our guarantee</h2>
        <p>
          If you're not 100% satisfied we will fully refund your purchase. Also,
          we offer free repairs for the first 20 years of ownership. Find that
          somewhere else!
        </p>
        <img src="/founders-3.png"></img>
      </div>
    </>
  );
}
