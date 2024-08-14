import Image from "next/image";

export default function Founders() {
  return (
      <><section className="IntroFounders">
      <h2>Meet the artisans behind our masterpieces!</h2>
      <p>Mike and Mandy</p>
      <img srcSet="founder-mike-and-mandy.png" alt="Mike and Mandy"/>
      </section>
      <section className="ContentFounders">
          <div>
          <h3>Our craftsmanship</h3>
          <p>Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.</p>
          <img src="founders-1.png" alt="Craftsmanship Image"/>
          </div>
        <div>
          <h3>Our experience</h3>
          <p>Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.</p>
          <img src="founders-2.png" alt="Experience Image"/>
          </div>
        <div>
          <h3>Our guarantee</h3>
          <p>If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!</p>
          <img src="founders-3.png" alt="Guarantee Image"/>
          </div>
      </section>
      </>
  );
}