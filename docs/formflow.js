$(document).ready(function() {
  (new SelectionHandler().handle());
});

class SelectionHandler {
  constructor() {
    this.providers = {
      two_unique : {
        name : "2Unique Community Salvation Foundation",
        website : "https://www.2unique-csf.org ",
        phone_number : "... to come ...",
        email : "Thisis2unique@gmail.com"
      },
      fresh_start : {
        name : "A Fresh Start to a New Beginning",
        website : "https://afreshstarttoanewbeginning.org",
        phone_number : "... to come ...",
        email : "greennadja@yahoo.com"
      },
      deaf_connect : {
        name : "DeafConnect of the Mid-South, Inc.",
        website : "https://www.deafconnect.org",
        phone_number : "... to come ...",
        email : "natasha@deafconnect.org"
      },
      goodwill_excel : {
        name : "Goodwill Excel Center Midsouth Inc.",
        website : "https://www.goodwillmemphis.org/theexcelcenter",
        phone_number : "... to come ...",
        email : "cmolinski@goodwillmemphis.org"
      },
      kingdom_community : {
        name : "Kingdom Community Builders",
        website : "https://www.facebook.com/KingdomCommunityBuilders",
        phone_number : "... to come ...",
        email : "dongilbert876@gmail.com"
        
      },
      priority_teachers : {
        name : "Priority Teachers University",
        website : "https://www.priorityteachersuniversity.com",
        phone_number : "... to come ...",
        email : "Tinieka41@gmail.com"
      }     
    }
    this.services = {
      job_training : {
        name : "Job training",
        providers : [
          this.providers.two_unique,
          this.providers.fresh_start
        ]
      },
      job_placement : {
        name : "Job Placement",
        providers : [
          this.providers.two_unique,
          this.providers.fresh_start
        ]
      },
      literacy : {
        name : "Literacy (reading and/or writing)",
        providers : [
          this.providers.goodwill_excel,
          this.providers.kingdom_community,
          this.providers.priority_teachers
        ]
      }
    }
  }
  handle() {
    let providerEl = $(".providers");
    providerEl.hide();
    let services = this.services;
    $('input:radio[name=services]').change(function() {
      providerEl.empty();
      providerEl.append("<br/>");
      providerEl.append(services[this.value].name);
      providerEl.show();
    });
  }
}
