const listingsSection = document.querySelector('#listings')
listingsSection.innerHTML = "";
let data;

function listingCard(listing) {
    return `<div class="col-4">
  <div class="listing card">
    <img
      src="${listing.picture_url}"
      class="card-img-top"
      alt="AirBNB Listing"
    />
    <div class="card-body">
      <h2 class="card-title">${listing.name}</h2>
      <div>${listing.price}</div>
      <p class="card-text">
        ${listing.property_type}
      </p>
      <a href="${listing.listing_url}" class="btn btn-primary">aribnb page</a>
    </div>
  </div>
  <!-- /card -->
  </div>`
}

function renderListing(data) {
    listingsSection.innerHTML = data.map(listingCard).join('\n');
}

async function loadData() {
    const resp = await fetch('./airbnb_sf_listings_500.json');
    data = await resp.json();
}

loadData().then(() => renderListing(data.slice(0,50)))