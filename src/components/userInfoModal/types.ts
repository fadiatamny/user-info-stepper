export interface UserInfo {
  firstName: string | null;
  lastName: string | null;
  age: number | null;
}

export interface UserInfoModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
