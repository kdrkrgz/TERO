from django.db import models
from django.urls import reverse
from django.utils.text import slugify

class Unilist(models.Model):
    uid = models.IntegerField(primary_key=True)
    uni_name = models.CharField(max_length=512, null=False, verbose_name='Üniversite Adı')
    uni_city = models.CharField(max_length=128, null=False, verbose_name='Üniversitenin Bulunduğu Şehir')
    uni_type = models.CharField(max_length=64, null=False, verbose_name='Üniversite Tipi')
    slug = models.SlugField(unique=True, editable=False, max_length=256, blank=True, null=True)

    def __str__(self):
        return self.uni_name

    def get_absolute_url(self):
        return reverse('main:TercihRobotu', kwargs = {'slug': self.slug})

    def get_unique_slug(self):
        slug = slugify(self.uni_name.replace('ı', 'i'))
        unique_slug = slug
        counter = 1
        while Unilist.objects.filter(slug=unique_slug).exists():
            unique_slug = '{}-{}'.format(slug, counter)
            counter += 1
        return unique_slug

    def save(self, *args, **kwargs):
        self.slug = self.get_unique_slug()
        return super(Unilist, self).save(*args, **kwargs)



class Faklist(models.Model):
    uid = models.ForeignKey(Unilist, on_delete=models.CASCADE)
    fid = models.IntegerField(unique=True, primary_key=True, verbose_name='Fakülte ID')
    fak_name = models.CharField(max_length=512, null=False, verbose_name='Fakülte Adı')

    def __str__(self):
        return self.fak_name

class Deplist(models.Model):
    uid = models.ForeignKey(Unilist, on_delete= models.DO_NOTHING)
    fid = models.ForeignKey(Faklist, on_delete=models.DO_NOTHING)
    did = models.IntegerField(unique=True, null=False, primary_key=True, verbose_name='Bölüm ID')
    dep_name = models.CharField(max_length=512, null=False, verbose_name='Program Adı')
    dep_code = models.CharField(max_length=32, null=False, verbose_name='Program Kodu')
    dep_note = models.CharField(max_length=256, null=True, verbose_name='Program Açıklaması')
    dep_duration = models.SmallIntegerField(null=False, verbose_name='Öğretim Süresi')
    dep_point_type = models.CharField(max_length=16, null=False, verbose_name='Puan Türü')
    dep_limit = models.IntegerField(null=True, verbose_name='Genel Kontenjan')
    dep_point16 = models.CharField(max_length=64,blank = True,null = True, verbose_name='2016 ÖSYS Taban Puanı')
    dep_placement16 = models.CharField(max_length=16,null=True, verbose_name='2016 ÖSYS Yerleştirme Sırası')
    dep_rules = models.CharField(max_length=64 ,null=True, verbose_name='Özel Koşul')
    dep_dig = models.IntegerField(null=True, verbose_name='Program Grup')

    def __str__(self):
        return self.dep_name
