const toggle = document.querySelector("#pricing-356 .cs-toggle");
  const option1 = document.querySelector("#pricing-356 .cs-toggle-group #cs-option1-356");
  const option2 = document.querySelector("#pricing-356 .cs-toggle-group #cs-option2-356");
  const optionGroup = Array.from(document.querySelectorAll('.cs-option-group'))
  const cardGroup = document.querySelector("#pricing-356 .cs-card-group");

  toggle.addEventListener('click', (e) => {
      for (const item of optionGroup) {
          item.classList.toggle("option2-active");
      }
      toggle.classList.toggle("active");
      cardGroup.classList.toggle("lump");
  });
  option1.addEventListener('click', (e) => {
      for (const item of optionGroup) {
          item.classList.remove("option2-active");
      }
      toggle.classList.remove("active");
      cardGroup.classList.remove("lump");
  });
  option2.addEventListener('click', (e) => {
      for (const item of optionGroup) {
          item.classList.add("option2-active");
      }
      toggle.classList.add("active");
      cardGroup.classList.add("lump");
  });