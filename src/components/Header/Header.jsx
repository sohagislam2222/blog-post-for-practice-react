import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center container mx-auto py-5 border-b-2 border-b-gray-300">
      <h1 className="text-4xl font-bold ">Knowledge cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
