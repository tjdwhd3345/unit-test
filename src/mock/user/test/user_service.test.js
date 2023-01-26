const UserClient = require('../user_client.js');
const UserService = require('../user_service.js');

jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async (id, password) => {
    return { name: 'mo', created_at: '20230127' };
  });
  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
    // clear mock 설정을 하면 아래는 안해도 됨.
    login.mockClear();
    UserClient.mockClear();
  });

  it('init with isLogedIn === false', () => {
    expect(userService.isLogedIn).toBe(false);
  });

  it('login() 호출 후 isLogedIn === true', async () => {
    await userService.login('id', 'password');

    expect(userService.isLogedIn).toBe(true);
  });

  it('한번 login() 호출 이후 다시 login()이 호출되면 안됨', async () => {
    await userService.login('id', 'password');
    await userService.login('id', 'password');
    expect(userService.userClient.login).toHaveBeenCalledTimes(1);
    expect(userService.userClient.login).toHaveBeenCalledWith(
      ...['id', 'password']
    );
  });
});
