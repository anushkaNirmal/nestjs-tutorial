import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Anushka Nirmal', email: 'abc@def.com' },
    { id: 2, name: 'John Doe', email: 'abc@def.com' },
    { id: 3, name: 'Jane Dane', email: 'abc@def.com' },
    { id: 4, name: 'Mike Ross', email: 'abc@def.com' },
    { id: 5, name: 'Rachel Zane', email: 'abc@def.com' },
  ];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string }) {
    const newId = [...this.users].sort((a, b) => b.id - a.id)[0].id + 1;
    const newUser = { id: newId, ...user };
    this.users.push(newUser);
    return this.findById(newId);
  }

  update(id: number, userUpdate: { name?: string; email?: string }) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.findById(id);
  }

  delete(id: number) {
    const removedUser = this.findById(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
