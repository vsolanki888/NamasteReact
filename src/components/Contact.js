const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <div>
        <form>
          <input
            className="border-2 border-gray-300 p-2 m-2"
            type="text"
            placeholder="name"
          />
          <input
            className="border-2 border-gray-300 p-2 m-2"
            type="text"
            placeholder="message"
          />
          <button className="bg-blue-500 text-white p-2 m-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
