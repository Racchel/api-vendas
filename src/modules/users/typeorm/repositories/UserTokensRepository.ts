import { EntityRepository, Repository } from 'typeorm';
import { runInThisContext } from 'vm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const UserToken = await this.findOne({
      where: {
        token,
      },
    });

    return UserToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.create({
      user_id,
    });
    await this.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
