import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';


export  function PhonePage() {
   return( <div>
                  <h1>Phonebook</h1>

                  <ContactForm />

                  <h2>Contacts</h2>

                  <Filter />

                  <ContactsList />
                </div>)
}