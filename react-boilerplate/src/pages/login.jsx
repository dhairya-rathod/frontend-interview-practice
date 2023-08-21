export const Login = () => {
  return (
    <form className="max-w-md">
      <div className="flex flex-col">
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" />
      </div>
    </form>
  );
};
