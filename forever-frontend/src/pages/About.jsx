import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis distinctio impedit blanditiis, dolorem quod fugiat laboriosam
            ex consequatur error, deleniti tempora dignissimos quo inventore
            numquam saepe eveniet ipsum suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            aliquam cumque quidem quis, temporibus architecto facilis! Deleniti
            atque, similique, repudiandae totam ipsa sint ratione eligendi quos
            eveniet iusto facilis dicta.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            distinctio, molestias ducimus sequi tenetur consequuntur labore quia
            debitis quidem iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium, eos.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            facere distinctio ducimus vel itaque soluta.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            facere distinctio ducimus vel itaque soluta.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            facere distinctio ducimus vel itaque soluta.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
