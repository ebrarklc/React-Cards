import 'bulma/css/bulma.css';
import './App.css';
import Course  from './Course';
import HTML from './react resim/HTML.jpeg'
import CSS from './react resim/CSS.png'
import Bootstrap from './react resim/bootstrap.jpeg'
import Javascript from './react resim/javascript.png'

function App() {
  return (
    <div className="App">
    <section className="hero is-link" style={{backgroundColor:'black',boxShadow: '10px 15px 20px ',backgroundColor:'black'}}>
  <div className="hero-body">
    <p className="title" style={{textAlign:'center'}}>Front-End Eğitimlerim</p>
  
  </div>
</section>
    

   <div className='container'>
    <section className='section'>
<div className='columns'>
      <div className='column'>
     <Course 
      image={HTML}
      title = "HTML"
      description = "HTML (HyperText Markup Language), web sayfalarının yapılandırılması ve içeriğinin tanımlanması için kullanılan standart bir işaretleme dilidir. HTML, metin, resimler, bağlantılar, form alanları gibi çeşitli öğeleri belirtmek için etiketlerden oluşur."/>
      </div>

      <div className='column'>
      <Course
      image={CSS}
      title = "CSS"
      description = "CSS (Cascading Style Sheets), web sayfalarının görsel düzenini ve görünümünü belirlemek için kullanılan bir stil dilidir. HTML'in yapısını (içerik, başlık, bağlantılar vb.) ayırt etmek için kullanılır."/>
      </div>

      <div className='column'>
      <Course 
      image={Bootstrap}
      title = "Bootstrap"
     description = " Bootstrap, Twitter tarafından geliştirilen ve açık kaynaklı bir CSS framework'üdür. Web siteleri ve web uygulamaları geliştirmek için kullanılan popüler bir araçtır. Bootstrap, HTML, CSS ve JavaScript'in bir kombinasyonunu kullanarak, web geliştiricilerine hızlı ve kolay bir şekilde duyarlı, modern ve şık görünümlü kullanıcı arayüzleri oluşturma imkanı sunar."/>
      </div>

      <div className='column'>
      <Course 
      image={Javascript}
      title = "Javascript"
      description = "JavaScript, web tarayıcılarında çalışabilen ve web sayfalarını etkileşimli hale getirmek için kullanılan bir programlama dilidir. JavaScript, dinamik içerik oluşturmak, kullanıcı etkileşimi sağlamak, form işlemleri yapmak, animasyonlar oluşturmak, veri gönderip almak gibi çeşitli görevleri yerine getirmek için kullanılır."/>
      </div>

    </div>

    </section>
    

   </div>

    


     

     
    

    </div>
  );
}

export default App;
