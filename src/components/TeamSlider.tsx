import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TeamSlider = () => {
  useEffect(() => {
    // Initialize KeenSlider
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        spacing: 16,
        perView: 1.25,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            spacing: 32,
            perView: 2.5,
          },
        },
      },
    });

    // Set up event listeners for navigation
    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
    keenSliderNext?.addEventListener("click", () => keenSlider.next());

    // Cleanup function to destroy KeenSlider instance
    return () => {
      keenSlider.destroy();
    };
  }, []);

  const profiles = [
    {
      name: "Dr. Kshama Mangal (PT)",
      qualifications: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
      experience: "13 years of experience",
      specialties: [
        "Sports Physiotherapy",
        "Orthopedics Rehab",
        "Shoulder Injury",
      ],
      image:
        "https://i.pinimg.com/236x/43/37/07/4337072f34e46866a5c12512376072b5.jpg",
    },
    {
      name: "Dr. John Doe",
      qualifications: "MD, Ph.D. in Medicine",
      experience: "15 years of experience",
      specialties: ["Internal Medicine", "Cardiology", "Diabetes Care"],
      image:
        "https://i.pinimg.com/236x/43/37/07/4337072f34e46866a5c12512376072b5.jpg",
    },
    {
      name: "Dr. John Doe",
      qualifications: "MD, Ph.D. in Medicine",
      experience: "15 years of experience",
      specialties: ["Internal Medicine", "Cardiology", "Diabetes Care"],
      image:
        "https://i.pinimg.com/236x/43/37/07/4337072f34e46866a5c12512376072b5.jpg",
    },
    {
      name: "Dr. John Doe",
      qualifications: "MD, Ph.D. in Medicine",
      experience: "15 years of experience",
      specialties: ["Internal Medicine", "Cardiology", "Diabetes Care"],
      image:
        "https://i.pinimg.com/236x/43/37/07/4337072f34e46866a5c12512376072b5.jpg",
    },
    // Add more profiles if needed
  ];

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
        rel="stylesheet"
      />

      <section className="projects">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <div className="max-w-xl">
              <h2 style={{
                    color: 'var(--text-color-one)',
                  }} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Trusted Professionals
              </h2>
              <p style={{
                    color: 'var(--text-color-one)',
                  }} className="text-gray-600">
                Meet our experienced team members.
              </p>
            </div>

            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                &lt;
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="projects_filter_cardsBox_card keen-slider__slide border p-4 rounded-md shadow-lg"
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="rounded-full mb-4 w-32 h-32 object-cover mx-auto border-4 border-white"
                  />
                  <h3 style={{
                    color: 'var(--text-color-one)',
                  }} className="text-2xl font-bold mb-2 text-gray-900">
                    {profile.name}
                  </h3>
                  <p style={{
                    color: 'var(--text-color-one)',
                  }} className="text-gray-600">
                    {profile.qualifications} | {profile.experience}
                  </p>
                  <ul style={{
                    color: 'var(--text-color-one)',
                  }} className="list-disc list-inside mt-2">
                    {profile.specialties.map((specialty, index) => (
                      <li key={index} style={{
                        color: 'var(--text-color-one)',
                      }}>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition">
                    Know More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSlider;
