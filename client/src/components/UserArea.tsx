function UserArea() {
  return (
    <div className="p-6 bg-white rounded-xl">
      <h3 className="font-bold text-blue-900 text-lg">User Area</h3>
      <div className="flex flex-row justify-evenly">
        <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded duration-500">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded duration-500">
          Register
        </button>
      </div>
    </div>
  );
}
export default UserArea;
