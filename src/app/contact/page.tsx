import { ContactList } from '@/components/contact/contact-list';

export default function Stack() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4 gap-4">
      <ContactList />
    </div>
  );
}
