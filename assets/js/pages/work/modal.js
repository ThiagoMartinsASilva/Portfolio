export function initModal() {
    const modal    = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');
    if (!modal) return;

    document.querySelectorAll('.project-card').forEach(card => {
        const freshCard = card.cloneNode(true);
        card.parentNode.replaceChild(freshCard, card);

        freshCard.addEventListener('click', () => {
            if (freshCard.querySelector('.card-image--wip')) return;

            const mTitle  = document.getElementById('modal-title');
            const mDesc   = document.getElementById('modal-desc');
            const mImg    = document.getElementById('modal-img');
            const mSite   = document.getElementById('modal-site');
            const mGithub = document.getElementById('modal-github');

            if (mTitle) mTitle.innerText = "";
            if (mDesc)  mDesc.innerText  = "";
            if (mImg)   mImg.src         = "";

            const { title, desc, img, site, github } = freshCard.dataset;
            if (mTitle)  mTitle.innerText = title  || "";
            if (mDesc)   mDesc.innerText  = desc   || "";
            if (mImg)    mImg.src         = img    || "";
            if (mSite) {
                mSite.href = site || "#";
                mSite.style.display = (site && site !== "#") ? "inline-block" : "none";
            }
            
            if (mGithub) {
                mGithub.href = github || "#"; 
                mGithub.style.display = (github && github !== "#") ? "inline-block" : "none";
            }
            // ----------------------------

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
}

document.addEventListener('DOMContentLoaded', initModal);