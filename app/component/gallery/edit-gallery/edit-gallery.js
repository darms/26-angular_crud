<section class="edit">
<form class="edit-gallery"
name="editGallery"
ng-submit="editGalleryCtrl.update()"
novalidate>

<fieldset>
<span class="item-label"> name: </span>
<input name="name" class="input-std" type="text"
ng-model="editGalleryCtrl.gallery.name">
</fieldset>

<fieldset>
<span class="item-label"> description: </span>
<input name="desc" class="input-std" type="test"
ng-model="editGalleryCtrl.gallery.desc"
</fieldset>

<button class="btn-std"> update</button>
</form>
</section>
