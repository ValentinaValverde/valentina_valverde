import Divider from './Divider';

export default function Contact() {
  return (
    <div>
      <Divider text="Contact" />
      <div className="w-full p-6 h-[75vh] flex items-end justify-center">
        <p className="text-[clamp(2rem,8vw,8rem)] p-6 opacity-25 hover:opacity-100 transition duration-300">
          sofficestudio@gmail.com
        </p>
      </div>
    </div>
  );
}
