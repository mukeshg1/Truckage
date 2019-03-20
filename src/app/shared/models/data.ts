export class RegisterData {
    id: number;
    name: string;
    email: string;
    password: string;
    confirmpassword?: string;
    token?: string;
}

export class changePasswordData {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}