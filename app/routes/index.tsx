export default function Index() {
  return (
    <>
      <header>
        <div className="max-w-[800px] my-0 mx-auto px-6">
          <div className="pt-24 pb-16 max-w-[415px]">
            <h1 className="text-[2rem] leading-[1.2] mb-12">Huckleberry</h1>

            <p className="text-xl leading-normal mb-4">
              An avant-garde agency focused on connecting{" "}
              <strong className="text-[#009966]">passion</strong> with{" "}
              <strong className="text-[#009966]">logistics</strong>.
            </p>

            <p className="text-xl leading-normal">
              A better way to solve the problems of tomorrow.
            </p>
          </div>
        </div>
      </header>

      <main className="bg-[#666666] py-16 border-t-8 border-t-solid border-[#999999]">
        <section className="max-w-[800px] my-0 mx-auto px-6">
          <div className="bg-white p-6 -mx-6 border-b-8 border-b-solid border-b-[#999999]">
            <h2 className="text-2xl leading-[1.2] px-8 py-4 border-b-[#cc9900] border-b-solid border-b-8 w-fit bg-[#ffbf00] -mx-8 font-extrabold -mt-4 mb-4">
              Wealth comes from operations
            </h2>

            <p className="text-xl leading-normal mb-4">
              No modern business can thrive without developing a specialization
              in operations. <em>Huckleberry</em> has helped dozens of
              companies, from Fortune 50 monoliths to fast-growing Bay Area
              startups, achieve their goals and meet their KPIs by leveraging
              our extensive network of logistics experts.
            </p>

            <p className="text-xl leading-normal">
              <em>Huckleberry</em> was established in 2003 to help ambitious
              businesses discover their true potential. If that resonates, let's
              chat.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
