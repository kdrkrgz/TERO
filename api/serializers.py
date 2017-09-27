#from rest_framework import serializers
#from main.models import Unilist, Faklist, Deplist
#
#
#class UniSerializer(serializers.ModelSerializer):
#
#    class Meta:
#        model = Unilist
#        fields = '__all__'
#
#
#class FakSerializer(serializers.ModelSerializer):
#
#    class Meta:
#        model = Faklist
#        fields = '__all__'
#
#
#
#class DepSerializer(serializers.ModelSerializer):
#    uni_names = UniSerializer(source='uid')
#    fak_names = FakSerializer(source='fid')
#    #uni_name = serializers.CharField(source='uid_id')
#    class Meta:
#        model = Deplist
#        fields = ('uni_names','fak_names','dep_name','dep_code','did',str('dep_point16'),'uid_id','fid_id','dep_note','dep_duration',
#                  'dep_limit','dep_placement16','dep_rules','dep_point_type')
#
#
#        #fields = (str('dep_name'), str('dep_code'), str('dep_note'), str('dep_duration'), str('dep_point_type'),
#        #          str('dep_limit'), str('dep_point16'), str('dep_placement16'), str('dep_rules'))
#