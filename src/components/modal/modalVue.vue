<template lang="">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalToggleLabel">{{$t('modal.title_h3')}}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>{{$t('modal.p_1')}}</p>

                <p>{{$t('modal.p_2')}}</p>
                
                <p>{{$t('modal.p_3')}}</p>
                
                <p>{{$t('modal.p_4')}}</p>
                
                <p>{{$t('modal.p_5')}}</p>
                
                <p>{{$t('modal.p_6')}}</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" > ssfsfs</button>
            </div>
          </div>
        </div>
      </div>

      <a class="btn " data-bs-toggle="modal" href="#exampleModalToggle" role="button"> <span class="badge rounded-pill bg-primary"><font-awesome-icon icon="info" /></span></a>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .btn{
        background: transparent;
        border: none;
    }

    .modal-body p{
        text-align: start;
        font-size: 18px;
        height: 14vh;
        display: flex;
        align-items: center;

    }
</style>