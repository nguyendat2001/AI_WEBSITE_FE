<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">
        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">
         

            <!-- Reports -->
            <div class="col-12">
              <div class="card">

                <div class="card-body">
                  <h5 class="card-title">Pricing House <span>| Prediction</span></h5>

                  <!-- Line Chart -->
                  <div id="reportsChart"></div>
                  <form class="row g-3" >
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="bedrooms" v-model="this.house_price_data.bedrooms" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="bathrooms" v-model="this.house_price_data.bathrooms " />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="sqft_living" v-model="this.house_price_data.sqft_living" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="sqft_lot" v-model="this.house_price_data.sqft_lot" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="view" v-model="this.house_price_data.view" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="floors" v-model="this.house_price_data.floors" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="grade" v-model="this.house_price_data.grade" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="sqft_above" v-model="this.house_price_data.sqft_above" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="sqft_basement" v-model="this.house_price_data.sqft_basement" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="yr_built" v-model="this.house_price_data.yr_built" />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="zipcode" v-model="this.house_price_data.zipcode" />
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-outline-primary" @click="this.HousePrice_Predict(this.house_price_data)">Predict</button>
                    </div>
                    <!-- <div class="text-center">
                      <button type="submit" class="btn btn-primary">Submit</button>
                      <button type="reset" class="btn btn-secondary">Reset</button>
                    </div> -->
                  </form>
                  <!-- End No Labels Form -->
                  <!-- End Line Chart -->
                </div>
              </div>
            </div>
            <!-- End Reports -->


            <!-- End Recent Sales -->

            <!-- End Top Selling -->
          </div>
        </div>
        <!-- End Left side columns -->

        <!-- Right side columns -->
        <div class="col-lg-4">
          <!-- Recent Activity -->
          <div>
            <div class="card info-card revenue-card">
              <div class="card-body d-flex justify-content-center">
                <h5 class="card-title">House Price <span>|</span></h5>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-currency-dollar"></i>
                  </div>
                  <div class="ps-3">
                    <h6 v-if="this.house_price_res!=null">${{this.house_price_res.output}}</h6>
                    <span class="text-success small pt-1 fw-bold">8%</span>
                    <span class="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Recent Activity -->


        </div>
        <!-- End Right side columns -->

        <div class="col-lg-12">
          <!-- Recent Activity -->
          <div>
                        <!-- Recent Sales -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"
                    ><i class="bi bi-three-dots"></i
                  ></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Covid-19 <span>| Lung-Infection-Prediction</span></h5>
                  <div class="">
                    <div class="row">
                      <div class="fileUploadInput col-10">
                        <label>✨ chọn file</label>
                        <input  ref="file"  @change="onFileChange" type="file" />
                        <button>+</button>
                      </div>
                      <div class="col-2"> <button class="btn btn-outline-primary btn-lg mt-4" @click="this.Lung_Disease_Predict()">Predict</button></div>
                    </div>
                    
                    <div class="mt-2 p-2 d-flex justify-content-evenly">
                      <img v-if="this.lung_disease_res != null" :src="'http://127.0.0.1:5000'+this.lung_disease_res.image" width="300"  height="300" alt="Paris"  class="img-thumbnail" >
                      <img v-if="this.lung_disease_res != null" :src="'http://127.0.0.1:5000'+this.lung_disease_res.mask" width="300"  height="300" alt="Paris"  class="img-thumbnail" >
                      <div class="image-container">
                          <img v-if="this.lung_disease_res != null" :src="'http://127.0.0.1:5000'+this.lung_disease_res.image" width="300"  height="300" alt="Paris"  class="img-thumbnail image">
                          <img v-if="this.lung_disease_res != null" :src="'http://127.0.0.1:5000'+this.lung_disease_res.mask" width="300"  height="300" alt="Paris"  class="img-thumbnail overlay">
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Recent Activity -->


        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>

<script>
import AiService from "@/services/ai.service";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    components: {
      AiService,
    },
    data() {
        return {
          house_price_data:{},
          lung_disease_res: null,
          house_price_res:null,
        };
    },
    
    watch: {
    },
    computed: {

    },
    methods: {
      async HousePrice_Predict(data){
        try{
          // console.log(data)
          this.house_price_res = await AiService.pricing_house_AI(data);
          console.log(this.house_price_res)
          toast.success("predict housing price successfull!", {
                    autoClose: 3000
                });
        }catch(err){
          console.log(err)
        }
      },
      async Lung_Disease_Predict(){
        try{
          const formData = new FormData();
          formData.append('file',this.$refs.file.files[0]);
          console.log(formData)
          this.lung_disease_res = await AiService.covid_19_AI(formData);
          console.log(this.lung_disease_res)
          toast.success("predict Lung disease successfull!", {
                    autoClose: 3000
                });
        }catch(err){
          console.log(err)
        }
      },
    },
    mounted() {
        
      },
};
</script>
<style>
/*# sourceMappingURL=dashboard-free.css.map */.fileUploadInput {
    display: grid;
    grid-gap: 10px;
    position: relative;
    z-index: 1;
}

.fileUploadInput label {
    display: flex;
    align-items: center;
    color: setColor(primary, 0.5);
    background: setColor(white);
    transition: .4s ease;
    font-family: arial, sans-serif;
    font-size: .75em;
    font-weight: regular;
}

.fileUploadInput input {
    position: relative;
    z-index: 1;
    padding: 0 gap(m);
    width: 100%;
    height: 50px;
    border: 1px solid #323262;
    border-radius: 3px;
    font-family: arial, sans-serif;
    font-size: 1rem;
    user-select: none;
    cursor: pointer;
    font-weight: regular;
}

.fileUploadInput input[type="file"] {
    padding: 0 gap(m);
}

.fileUploadInput input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
    margin-left: 10px;
    padding: 0;
    height: 50px;
    width: 0;
}

.fileUploadInput button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50px;
    height: 50px;
    line-height: 0;
    user-select: none;
    color: white;
    background-color: #323262;
    border-radius: 0 3px 3px 0;
    font-family: arial, sans-serif;
    font-size: 1rem;
    font-weight: 800;
}

.fileUploadInput button svg {
    width: auto;
    height: 50%;
}

@-moz-document url-prefix() {
    .fileUploadInput button {
        display: none
    }
}

.image-container {
    position: relative;
    display: inline-block; /* Đảm bảo phần tử cha coi ảnh là phần tử block */
}

.image {
    display: block; /* Đảm bảo ảnh nằm trên một dòng */
}

.overlay {
    position: absolute; /* Đặt ảnh overlay ở vị trí tuyệt đối */
    top: 0;
    left: 0;
    opacity: 0.3; /* Điều chỉnh độ mờ của ảnh overlay */
}

</style>