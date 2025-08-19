import { ArrowRight, Leaf, Truck, Shield } from "lucide-react";
import "./heroSection.css";

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Pattern */}
      <div className="hero-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            {/* Badge */}
            <div className="badge">
              <Leaf size={16} />
              100% Organic & Fresh
            </div>

            {/* Main Heading */}
            <div className="hero-heading">
              <h1>
                Fresh from <span>Farm to Table</span>
              </h1>
              <p>
                Discover premium organic produce, delivered straight from local farms to your doorstep. Fresh, healthy,
                and sustainably grown.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">Learn More</button>
            </div>

            {/* Features */}
            <div className="features">
              <div className="feature">
                <div className="icon"><Truck size={18} /></div>
                <div>
                  <p className="feature-title">Free Delivery</p>
                  <p className="feature-sub">Orders over $50</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon"><Leaf size={18} /></div>
                <div>
                  <p className="feature-title">100% Organic</p>
                  <p className="feature-sub">Certified fresh</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon"><Shield size={18} /></div>
                <div>
                  <p className="feature-title">Quality Promise</p>
                  <p className="feature-sub">100% guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hero-right">
            <img src="/src/assets/organic-basket-farm.png" alt="Fresh produce" className="hero-image" />

            {/* Floating Cards */}
            <div className="floating-card top-card">
              <div className="feature">
                <div className="icon"><Leaf size={18} /></div>
                <div>
                  <p className="feature-title">Farm Fresh</p>
                  <p className="feature-sub">Harvested today</p>
                </div>
              </div>
            </div>

            <div className="floating-card bottom-card">
              <p className="card-number">500+</p>
              <p className="feature-sub">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
