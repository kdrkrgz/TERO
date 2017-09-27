from django.contrib import admin

# Register your models here.

from . models import Unilist, Faklist, Deplist

class UnilistAdmin(admin.ModelAdmin):
    list_display = ['uid','uni_name', 'uni_city', 'uni_type', 'slug']
    readonly_fields = ['uid']
    list_display_links = ['uid','uni_name']
    list_filter = ['uni_type']
    search_fields = ['uni_name', 'uni_city']
    ordering = ['uid']
    list_per_page = 50

    class Meta:
        model = Unilist


admin.site.register(Unilist,UnilistAdmin)


class FaklistAdmin(admin.ModelAdmin):
    list_display = ['uid','fid','fak_name']
    readonly_fields = ['uid','fid']
    search_fields = ['fak_name','fid']
    ordering = ['fid']
    list_per_page = 50

    class Meta:
        model = Faklist

admin.site.register(Faklist,FaklistAdmin)


class DeplistAdmin(admin.ModelAdmin):
    list_display = ['fid','did', 'dep_name', 'dep_point16', 'dep_placement16', 'dep_rules']
    readonly_fields = ['fid', 'did']
    list_per_page = 100

    class Meta:
        model = Deplist

admin.site.register(Deplist,DeplistAdmin)